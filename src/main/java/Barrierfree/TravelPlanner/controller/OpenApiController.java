package Barrierfree.TravelPlanner.controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;


@RestController
public class OpenApiController {

    @GetMapping("/api/allList")
    public Map<String, Object> callApi() throws ParseException {
        StringBuilder result = new StringBuilder();
        Map<String, Object> resultMap = new HashMap<String, Object>();

        try {
            String apiUrl = "https://apis.data.go.kr/B551011/KorWithService1/areaBasedList1?" + "numOfRows=10&pageNo=1&MobileOS=WIN&MobileApp=BarreierFree" +
                    "&serviceKey=zpQOxpJJNqt1aSdMcAGIcG5LWZCuI5cYNQ2uM%2BPFpOpQYemqKtWyQeJqZF1eU03gR6467nqXVsIr5ha7Xsa2bg%3D%3D&_type=json";
            URL url = new URL(apiUrl);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setRequestMethod("GET");
            urlConnection.setRequestProperty("Content-Type", "application/json");
            urlConnection.setDoOutput(true); // 출력 가능 상태로 변경
            urlConnection.connect();
            BufferedReader br;

            br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream(), "UTF-8" ));

            String returnLine;

            while((returnLine = br.readLine()) != null) {
                result.append(returnLine + "\n\r");
            }

            urlConnection.disconnect();
        }catch (Exception e) {
            e.printStackTrace();
        }

        JSONParser parser = new JSONParser();
        Object objP = parser.parse(result.toString());
        JSONObject jsonObj = (JSONObject) objP; //root
        Object objc = jsonObj.get("response");  // {header: {}, "body: {}}
        
        JSONObject jsonObjc = (JSONObject) objc;
        Object obja = jsonObjc.get("body");
        JSONObject jsonObja = (JSONObject) obja;
        Object objb = jsonObja.get("items");
        JSONObject jsonObjb = (JSONObject) objb;
        JSONArray siteArr = (JSONArray) jsonObjb.get("item");

//        for(int i = 0; i < siteArr.size(); i++) {
//            objP = (JSONObject) siteArr.get(i);
//            String addr1 = (String) ((JSONObject) objP).get("addr1");
//            String contentid = (String) ((JSONObject) objP).get("contentid");
//            String title = (String) ((JSONObject) objP).get("title");
//            resultMap.put("addr1", addr1);
//            resultMap.put("contentid", contentid);
//            resultMap.put("title", title);
//        }

        resultMap.put("sites", siteArr);
        return resultMap;
    }
}
