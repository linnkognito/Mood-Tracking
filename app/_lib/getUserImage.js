export function getUserImage(image) {
  if (!image || image === 'uploads/default_user.png')
    return '/avatar-default.svg';

  return `${process.env.NEXT_PUBLIC_API_URL}/${image}`;
}
