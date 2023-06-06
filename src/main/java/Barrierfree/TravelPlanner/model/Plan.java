package Barrierfree.TravelPlanner.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Plans")
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "trip_name")
    private String tripName;

    private LocalDate date;

    private String place;

    public Plan() {
        // 기본 생성자
    }

    public Plan(Long userId, String tripName, LocalDate date, String place) {
        this.userId = userId;
        this.tripName = tripName;
        this.date = date;
        this.place = place;
    }

    // Getter 및 Setter 메서드
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getTripName() {
        return tripName;
    }

    public void setTripName(String tripName) {
        this.tripName = tripName;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }
}
