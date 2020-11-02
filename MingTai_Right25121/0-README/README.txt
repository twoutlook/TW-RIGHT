
2020-11-02
==================
云1
權限平台
由
C:\R09\APP\24161\TEST\2020-09-01\TaiWeiRight_24161
改到
C:\GITHUB\IIS\RIGHT\MingTai_Right25121
==================


兩個配置要調整

1.本身的db connection
 Configs/database.config
  <add name="RightSystem" connectionString

2. 2020-11-02 升級後主動同步WMS
Web.config
   <endpoint address="http://127.0.0.1:2416/apps/WMSService/CommonService.asmx"