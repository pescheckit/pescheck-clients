# V2Candidate

Bucket-level candidate facts. Required-ness varies per profile; serializer is lenient.  Note: v2 tightens nationality vs v1 - v1 accepted any free-form string, v2 requires an ISO 3166-1 alpha-2 code so downstream consumers (watchlist matching, document readers, etc.) can rely on the value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**initials** | **str** |  | [optional] 
**date_of_birth** | **str** |  | [optional] 
**gender** | **str** |  | [optional] 
**nationality** | **str** | ISO 3166-1 alpha-2 country code (e.g. \&quot;NL\&quot;, \&quot;DE\&quot;, \&quot;US\&quot;).  * &#x60;AD&#x60; - AD * &#x60;AE&#x60; - AE * &#x60;AF&#x60; - AF * &#x60;AG&#x60; - AG * &#x60;AI&#x60; - AI * &#x60;AL&#x60; - AL * &#x60;AM&#x60; - AM * &#x60;AN&#x60; - AN * &#x60;AO&#x60; - AO * &#x60;AQ&#x60; - AQ * &#x60;AR&#x60; - AR * &#x60;AS&#x60; - AS * &#x60;AT&#x60; - AT * &#x60;AU&#x60; - AU * &#x60;AW&#x60; - AW * &#x60;AX&#x60; - AX * &#x60;AZ&#x60; - AZ * &#x60;BA&#x60; - BA * &#x60;BB&#x60; - BB * &#x60;BD&#x60; - BD * &#x60;BE&#x60; - BE * &#x60;BF&#x60; - BF * &#x60;BG&#x60; - BG * &#x60;BH&#x60; - BH * &#x60;BI&#x60; - BI * &#x60;BJ&#x60; - BJ * &#x60;BL&#x60; - BL * &#x60;BM&#x60; - BM * &#x60;BN&#x60; - BN * &#x60;BO&#x60; - BO * &#x60;BR&#x60; - BR * &#x60;BS&#x60; - BS * &#x60;BT&#x60; - BT * &#x60;BV&#x60; - BV * &#x60;BW&#x60; - BW * &#x60;BY&#x60; - BY * &#x60;BZ&#x60; - BZ * &#x60;CA&#x60; - CA * &#x60;CC&#x60; - CC * &#x60;CD&#x60; - CD * &#x60;CF&#x60; - CF * &#x60;CG&#x60; - CG * &#x60;CH&#x60; - CH * &#x60;CI&#x60; - CI * &#x60;CK&#x60; - CK * &#x60;CL&#x60; - CL * &#x60;CM&#x60; - CM * &#x60;CN&#x60; - CN * &#x60;CO&#x60; - CO * &#x60;CR&#x60; - CR * &#x60;CU&#x60; - CU * &#x60;CV&#x60; - CV * &#x60;CW&#x60; - CW * &#x60;CX&#x60; - CX * &#x60;CY&#x60; - CY * &#x60;CZ&#x60; - CZ * &#x60;DE&#x60; - DE * &#x60;DJ&#x60; - DJ * &#x60;DK&#x60; - DK * &#x60;DM&#x60; - DM * &#x60;DO&#x60; - DO * &#x60;DZ&#x60; - DZ * &#x60;EC&#x60; - EC * &#x60;EE&#x60; - EE * &#x60;EG&#x60; - EG * &#x60;EH&#x60; - EH * &#x60;ER&#x60; - ER * &#x60;ES&#x60; - ES * &#x60;ET&#x60; - ET * &#x60;FI&#x60; - FI * &#x60;FJ&#x60; - FJ * &#x60;FK&#x60; - FK * &#x60;FM&#x60; - FM * &#x60;FO&#x60; - FO * &#x60;FR&#x60; - FR * &#x60;GA&#x60; - GA * &#x60;GB&#x60; - GB * &#x60;GD&#x60; - GD * &#x60;GE&#x60; - GE * &#x60;GF&#x60; - GF * &#x60;GG&#x60; - GG * &#x60;GH&#x60; - GH * &#x60;GI&#x60; - GI * &#x60;GL&#x60; - GL * &#x60;GM&#x60; - GM * &#x60;GN&#x60; - GN * &#x60;GP&#x60; - GP * &#x60;GQ&#x60; - GQ * &#x60;GR&#x60; - GR * &#x60;GS&#x60; - GS * &#x60;GT&#x60; - GT * &#x60;GU&#x60; - GU * &#x60;GW&#x60; - GW * &#x60;GY&#x60; - GY * &#x60;HK&#x60; - HK * &#x60;HM&#x60; - HM * &#x60;HN&#x60; - HN * &#x60;HR&#x60; - HR * &#x60;HT&#x60; - HT * &#x60;HU&#x60; - HU * &#x60;ID&#x60; - ID * &#x60;IE&#x60; - IE * &#x60;IL&#x60; - IL * &#x60;IM&#x60; - IM * &#x60;IN&#x60; - IN * &#x60;IO&#x60; - IO * &#x60;IQ&#x60; - IQ * &#x60;IR&#x60; - IR * &#x60;IS&#x60; - IS * &#x60;IT&#x60; - IT * &#x60;JE&#x60; - JE * &#x60;JM&#x60; - JM * &#x60;JO&#x60; - JO * &#x60;JP&#x60; - JP * &#x60;KE&#x60; - KE * &#x60;KG&#x60; - KG * &#x60;KH&#x60; - KH * &#x60;KI&#x60; - KI * &#x60;KM&#x60; - KM * &#x60;KN&#x60; - KN * &#x60;KP&#x60; - KP * &#x60;KR&#x60; - KR * &#x60;KW&#x60; - KW * &#x60;KY&#x60; - KY * &#x60;KZ&#x60; - KZ * &#x60;LA&#x60; - LA * &#x60;LB&#x60; - LB * &#x60;LC&#x60; - LC * &#x60;LI&#x60; - LI * &#x60;LK&#x60; - LK * &#x60;LR&#x60; - LR * &#x60;LS&#x60; - LS * &#x60;LT&#x60; - LT * &#x60;LU&#x60; - LU * &#x60;LV&#x60; - LV * &#x60;LY&#x60; - LY * &#x60;MA&#x60; - MA * &#x60;MC&#x60; - MC * &#x60;MD&#x60; - MD * &#x60;ME&#x60; - ME * &#x60;MG&#x60; - MG * &#x60;MH&#x60; - MH * &#x60;MK&#x60; - MK * &#x60;ML&#x60; - ML * &#x60;MM&#x60; - MM * &#x60;MN&#x60; - MN * &#x60;MO&#x60; - MO * &#x60;MP&#x60; - MP * &#x60;MQ&#x60; - MQ * &#x60;MR&#x60; - MR * &#x60;MS&#x60; - MS * &#x60;MT&#x60; - MT * &#x60;MU&#x60; - MU * &#x60;MV&#x60; - MV * &#x60;MW&#x60; - MW * &#x60;MX&#x60; - MX * &#x60;MY&#x60; - MY * &#x60;MZ&#x60; - MZ * &#x60;NA&#x60; - NA * &#x60;NC&#x60; - NC * &#x60;NE&#x60; - NE * &#x60;NF&#x60; - NF * &#x60;NG&#x60; - NG * &#x60;NI&#x60; - NI * &#x60;NL&#x60; - NL * &#x60;NO&#x60; - NO * &#x60;NP&#x60; - NP * &#x60;NR&#x60; - NR * &#x60;NU&#x60; - NU * &#x60;NZ&#x60; - NZ * &#x60;OM&#x60; - OM * &#x60;PA&#x60; - PA * &#x60;PE&#x60; - PE * &#x60;PF&#x60; - PF * &#x60;PG&#x60; - PG * &#x60;PH&#x60; - PH * &#x60;PK&#x60; - PK * &#x60;PL&#x60; - PL * &#x60;PM&#x60; - PM * &#x60;PN&#x60; - PN * &#x60;PR&#x60; - PR * &#x60;PS&#x60; - PS * &#x60;PT&#x60; - PT * &#x60;PW&#x60; - PW * &#x60;PY&#x60; - PY * &#x60;QA&#x60; - QA * &#x60;RE&#x60; - RE * &#x60;RO&#x60; - RO * &#x60;RS&#x60; - RS * &#x60;RU&#x60; - RU * &#x60;RW&#x60; - RW * &#x60;SA&#x60; - SA * &#x60;SB&#x60; - SB * &#x60;SC&#x60; - SC * &#x60;SD&#x60; - SD * &#x60;SE&#x60; - SE * &#x60;SG&#x60; - SG * &#x60;SH&#x60; - SH * &#x60;SI&#x60; - SI * &#x60;SJ&#x60; - SJ * &#x60;SK&#x60; - SK * &#x60;SL&#x60; - SL * &#x60;SM&#x60; - SM * &#x60;SN&#x60; - SN * &#x60;SO&#x60; - SO * &#x60;SR&#x60; - SR * &#x60;ST&#x60; - ST * &#x60;SV&#x60; - SV * &#x60;SY&#x60; - SY * &#x60;SZ&#x60; - SZ * &#x60;TC&#x60; - TC * &#x60;TD&#x60; - TD * &#x60;TF&#x60; - TF * &#x60;TG&#x60; - TG * &#x60;TH&#x60; - TH * &#x60;TJ&#x60; - TJ * &#x60;TK&#x60; - TK * &#x60;TL&#x60; - TL * &#x60;TM&#x60; - TM * &#x60;TN&#x60; - TN * &#x60;TO&#x60; - TO * &#x60;TR&#x60; - TR * &#x60;TT&#x60; - TT * &#x60;TV&#x60; - TV * &#x60;TW&#x60; - TW * &#x60;TZ&#x60; - TZ * &#x60;UA&#x60; - UA * &#x60;UG&#x60; - UG * &#x60;UM&#x60; - UM * &#x60;US&#x60; - US * &#x60;UY&#x60; - UY * &#x60;UZ&#x60; - UZ * &#x60;VA&#x60; - VA * &#x60;VC&#x60; - VC * &#x60;VE&#x60; - VE * &#x60;VG&#x60; - VG * &#x60;VI&#x60; - VI * &#x60;VN&#x60; - VN * &#x60;VU&#x60; - VU * &#x60;WF&#x60; - WF * &#x60;WS&#x60; - WS * &#x60;XK&#x60; - XK * &#x60;YE&#x60; - YE * &#x60;YT&#x60; - YT * &#x60;ZA&#x60; - ZA * &#x60;ZM&#x60; - ZM * &#x60;ZW&#x60; - ZW | [optional] 
**postal_code** | **str** |  | [optional] 
**house_number** | **str** |  | [optional] 
**extension** | **str** |  | [optional] 

## Example

```python
from pescheck.models.v2_candidate import V2Candidate

# TODO update the JSON string below
json = "{}"
# create an instance of V2Candidate from a JSON string
v2_candidate_instance = V2Candidate.from_json(json)
# print the JSON string representation of the object
print(V2Candidate.to_json())

# convert the object into a dict
v2_candidate_dict = v2_candidate_instance.to_dict()
# create an instance of V2Candidate from a dict
v2_candidate_from_dict = V2Candidate.from_dict(v2_candidate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


