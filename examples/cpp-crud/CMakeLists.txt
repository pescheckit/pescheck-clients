cmake_minimum_required(VERSION 3.10)

project(pescheck_cpp_crud_example CXX)

# The generated client uses `[=, this]` lambda captures, which require C++20.
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

if(NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release)
endif()

# Build the generated PescheckApi client library from the monorepo.
# This defines the `PescheckApi` target and transitively links cpprestsdk + Boost.
add_subdirectory(
    "${CMAKE_CURRENT_SOURCE_DIR}/../../clients/cpp"
    "${CMAKE_CURRENT_BINARY_DIR}/pescheck_client"
)

# The generated client's static lib pulls in cpprestsdk, which references
# OpenSSL and Boost symbols; link them explicitly into the executable.
find_package(cpprestsdk REQUIRED)
find_package(OpenSSL REQUIRED)
find_package(Boost REQUIRED COMPONENTS system)

add_executable(e2e_crud main.cpp)
target_link_libraries(e2e_crud PRIVATE
    PescheckApi
    cpprestsdk::cpprest
    OpenSSL::SSL
    OpenSSL::Crypto
    Boost::system
)
