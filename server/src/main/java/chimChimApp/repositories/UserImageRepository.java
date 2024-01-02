package chimChimApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import chimChimApp.models.User;
import chimChimApp.models.UserImage;

import java.util.Optional;

public interface UserImageRepository extends JpaRepository<UserImage, Integer> {
    Optional<UserImage> findByUser_Id(int userId);
}