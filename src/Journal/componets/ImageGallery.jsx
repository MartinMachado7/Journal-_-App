import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export const ImageGallery = ({images}) => {
  return (
    <ImageList sx={{width:'100%', height: 500 }} cols={3} rowHeight={200 }>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=248&fit=crop&auto=format`}
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt='Inagen de la nota'
            loading="lazy"
          />
          <ImageListItemBar
            title={image}
            subtitle={image}

          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


