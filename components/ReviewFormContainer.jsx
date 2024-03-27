import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-native';

const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;

const ReviewFormContainer = () => {
  const [createReview] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, review } = values;

    try {
      const { data } = await createReview({
        variables: {
          review: {
            repositoryName,
            ownerName,
            rating: Number(rating),
            text: review,
          },
        },
      });

      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.error(e);
    }
  };

  return <ReviewForm onSubmit={onSubmit} />;
};

export default ReviewFormContainer;
