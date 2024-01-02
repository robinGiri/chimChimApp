package chimChimApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import chimChimApp.models.UserImage;
import chimChimApp.responses.userImage.UserImageResponse;

@Mapper(componentModel = "spring")
public interface UserImageMapper {

    @Mapping(source = "user.id", target = "userId")
    UserImageResponse userImageToResponse(UserImage userImage);

}
