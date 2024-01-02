package chimChimApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import chimChimApp.models.PostImage;
import chimChimApp.responses.postImage.PostImageResponse;

@Mapper(componentModel = "spring")
public interface PostImageMapper {

    @Mapping(source = "post.id", target = "postId")
    PostImageResponse imageToResponse(PostImage postImage);

}
