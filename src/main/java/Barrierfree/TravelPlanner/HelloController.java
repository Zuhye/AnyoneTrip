package Barrierfree.TravelPlanner;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/demo")
    public String hello(){
        return "안녕하세요! ";
    }
}
