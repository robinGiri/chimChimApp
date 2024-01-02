package chimChimApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import chimChimApp.models.Follow;

import java.util.List;
import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Integer> {
    List<Follow> findAllByUser_Id(int userId);

    Optional<Follow> findByUser_IdAndFollowing_Id(int userId, int followingId);
}