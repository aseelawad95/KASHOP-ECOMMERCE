
import { Chip } from '@mui/material';


export default function CtegoryItem({category}) {
  return (
     <Chip label={category.name} clickable/>
  )
}
