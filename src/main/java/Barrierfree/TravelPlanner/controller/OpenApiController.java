package Barrierfree.TravelPlanner.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;



@RestController
public class OpenApiController {

    @GetMapping("/api")
    public String callApi() {
        StringBuilder result = new StringBuilder();

        try {
            String apiUrl = "https://apis.data.go.kr/B551011/KorWithService1/" +
                    "areaCode1?" + "numOfRows=10&pageNo=1&MobileOS=WIN&MobileApp=MobileAPP" + "&areaCode=1&_type=json&"+
                    "serviceKey=zpQOxpJJNqt1aSdMcAGIcG5LWZCuI5cYNQ2uM%2BPFpOpQYemqKtWyQeJqZF1eU03gR6467nqXVsIr5ha7Xsa2bg%3D%3D";
            URL url = new URL(apiUrl);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setRequestMethod("GET");

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

        return result.toString();
    }
}
