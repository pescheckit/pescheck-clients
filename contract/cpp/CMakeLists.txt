cmake_minimum_required(VERSION 3.10)

project(pescheck_cpp_contract CXX)

# The generated client uses `[=, this]` lambda captures, which require C++20.
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

if(NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release)
endif()

add_subdirectory(
    "${CMAKE_CURRENT_SOURCE_DIR}/../../clients/cpp"
    "${CMAKE_CURRENT_BINARY_DIR}/pescheck_client"
)

find_package(cpprestsdk REQUIRED)
find_package(OpenSSL REQUIRED)
# Boost >= 1.89 made Boost.System header-only and dropped its CMake package.
find_package(Boost REQUIRED OPTIONAL_COMPONENTS system)

add_executable(contract main.cpp)
target_link_libraries(contract PRIVATE
    PescheckApi
    cpprestsdk::cpprest
    OpenSSL::SSL
    OpenSSL::Crypto
    $<$<TARGET_EXISTS:Boost::system>:Boost::system>
)

enable_testing()
add_test(NAME contract COMMAND contract)
