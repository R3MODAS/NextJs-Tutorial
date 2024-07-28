interface Props {
  params: { id: number; photoId: number };
}

const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UserPhotos {id} {photoId}
    </div>
  );
};

export default PhotoPage;
