package Barrierfree.TravelPlanner.controller;

import Barrierfree.TravelPlanner.model.Plan;
import Barrierfree.TravelPlanner.repository.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/plans")
public class PlanController {

   private final PlanRepository planRepository;

   public PlanController(PlanRepository planRepository) {
       this.planRepository = planRepository;
   }

   @PostMapping
    public Plan createPlan(@RequestBody Plan plan) {
       return planRepository.save(plan);
   }
}
