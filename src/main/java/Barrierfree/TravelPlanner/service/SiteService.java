package Barrierfree.TravelPlanner.service;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import Barrierfree.TravelPlanner.model.ApiResponse;
import Barrierfree.TravelPlanner.model.Site;

import java.util.List;

@Service
public class SiteService {

    private final RestTemplate restTemplate;

    @Value("${api.serviceKey}")
    private String serviceKey;

    @Autowired
    public SiteService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "sites")
    public List<Site> fetchSites() throws Exception {
        try {
            String url = UriComponentsBuilder.fromHttpUrl("https://apis.data.go.kr/B551011/KorWithService1/areaBasedList1")
            .queryParam("serviceKey", serviceKey)
            .queryParam("numOfRows", "30")
            .queryParam("pageNo", "1")
            .queryParam("MobileOS", "WIN")
            .queryParam("MobileApp", "AppTest")
            .queryParam("listYN", "Y")
            .queryParam("arrange", "C")
            .queryParam("_type", "json")
            .toUriString();

    ApiResponse apiResponse = restTemplate.getForObject(url, ApiResponse.class);
    System.out.println(apiResponse);
    return apiResponse.getResponse().getBody().getItems().getItem();

    } catch (RestClientException e) {
            System.err.println("API 호출 중 오류 발생");
            throw new Exception("API 호출 실패", e);
        }
    }


    @Scheduled(cron = "0 0 0 * * ?") // 매일 자정에 실행
    @CacheEvict(value = "sites", allEntries = true)
    public void evictAllSitesCache() {
        // "sites" 캐시에 저장된 모든 항목이 삭제
    }


}