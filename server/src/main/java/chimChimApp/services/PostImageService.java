package chimChimApp.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import chimChimApp.mappers.PostImageMapper;
import chimChimApp.models.PostImage;
import chimChimApp.repositories.PostImageRepository;
import chimChimApp.responses.postImage.PostImageResponse;
import chimChimApp.utils.ImageUtil;

import java.io.IOException;
import java.util.Optional;

@Service
public class PostImageService {

    private final PostImageRepository postImageRepository;
    private final PostService postService;
    private final PostImageMapper postImageMapper;

    public PostImageService(PostImageRepository postImageRepository, PostService postService,
            PostImageMapper postImageMapper) {
        this.postImageRepository = postImageRepository;
        this.postService = postService;
        this.postImageMapper = postImageMapper;
    }

    public PostImageResponse upload(MultipartFile file, int postId) throws IOException {
        PostImage postImage = new PostImage();
        postImage.setName(file.getOriginalFilename());
        postImage.setType(file.getContentType());
        postImage.setData(ImageUtil.compressImage(file.getBytes()));
        postImage.setPost(postService.getById(postId));
        postImageRepository.save(postImage);
        return postImageMapper.imageToResponse(postImage);
    }

    public byte[] download(int id) {
        Optional<PostImage> postImage = postImageRepository.findPostImageByPost_Id(id);
        if (postImage.isPresent()) {
            return ImageUtil.decompressImage(postImage.get().getData());
        }
        return null;
    }
}
