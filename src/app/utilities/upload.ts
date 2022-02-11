import { v4 as uuid4 } from "uuid"

export const cinemaImageName = (req, file, callback) => {

    const fileName = `${file.originalname}-${uuid4()}`

} 