package Barrierfree.TravelPlanner.repository;

import Barrierfree.TravelPlanner.model.Plan;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Long>{

    List<Plan> findByUserId(Long userId);

    List<Plan> findByDate(LocalDate date);

    List<Plan> findByUserIdAndDate(Long userId, LocalDate date);

}
