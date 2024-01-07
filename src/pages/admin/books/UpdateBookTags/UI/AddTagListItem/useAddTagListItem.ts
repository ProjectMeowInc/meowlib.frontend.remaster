import {BookService} from "@/entities/Book/service/BookService";
import {AlertService} from "@/shared/services/AlertService";
import {ITagDTO} from "@/entities/Tag/models/dto/ITagDTO";
import {IUpdateBookTagRequest} from "@/entities/Book/models/requests/UpdateBookTagRequest";

export const useAddTagListItem = () => {

    const handleTagSelect = (tag: ITagDTO) => {
        setSelectedTag(tag);
    }

    const AddTagHandler = async (bookId: number, tags: IUpdateBookTagRequest) => {

        // @ts-ignore
        const result = await BookService.updateBookTags(bookId, tags)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage('Тег успешно добавлен к книге')
    }

    return {
        AddTagHandler,
        handleTagSelect,
    }
}