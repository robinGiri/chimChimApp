package chimChimApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import chimChimApp.models.Post;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {
    List<Post> findAllByUser_IdOrderByIdDesc(int userId);

    void deleteById(int id);
}