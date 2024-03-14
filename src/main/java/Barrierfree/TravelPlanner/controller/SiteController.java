package Barrierfree.TravelPlanner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import Barrierfree.TravelPlanner.model.ApiResponse;
import Barrierfree.TravelPlanner.model.Site;

import Barrierfree.TravelPlanner.service.SiteService;


@RestController
@RequestMapping("/api/sites")
public class SiteController {

    private final SiteService siteService;

    @Autowired
    public SiteController(SiteService siteService) {
        this.siteService = siteService;
    }
    @GetMapping
    public List<Site> getSites() throws Exception {
        return siteService.fetchSites();
    }
}