import { MarsRoverPhoto } from "../types";

export function MarsRoverPhotoCard({
  photo,
  onClick,
}: {
  photo: MarsRoverPhoto;
  onClick: (photoId: number) => void;
}) {
  return (
    <div className="rover-photo" onClick={() => onClick(photo.id)}>
      <img
        src={photo.img_src}
        alt={`Mars photo taken by ${photo.rover.name}`}
      />
    </div>
  );
}
