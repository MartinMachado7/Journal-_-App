import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../Layout/JournalLayout"
import { NothingSelectedViws } from "../Viws/NothingSelectedViws"
import { NoteView } from "../Viws/NoteView"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>      
      <NoteView/>
      {/* <NothingSelectedViws/> */}
      <Typography> Todos los hombre desean saber por naturaleza </Typography>
      <IconButton
      size="large"
      sx={{
        color:"white",
        backgroundColor: "error.main",
        ':hover': {backgroundColor: "error.main", opacity: 0.9 },
        position: 'fixed',
        right: 50,
        bottom: 50,
      }}
      >
      <AddOutlined sx={{ fontSize: 30 }}/>

      </IconButton>

    </JournalLayout>
  )
}
