import { gql } from '@apollo/client';

export const testQuery = gql`
  query Tests {
    tests(order_by: {name: asc}){
      brokee_id
      category
      description_short
      difficulty
      featured_image
      name
      requires_payment
      roles
      status
      tech_stack
      type
    }
  }
`;
