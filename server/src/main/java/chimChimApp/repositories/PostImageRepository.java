package chimChimApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import chimChimApp.models.Post;
import chimChimApp.models.PostImage;

import java.util.Optional;

public interface PostImageRepository extends JpaRepository<PostImage, Integer> {
    Optional<PostImage> findPostImageByPost_Id(int postId);
}