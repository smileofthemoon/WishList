import styled from "styled-components";

export default {
  WishBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
  `,

  WishCategories: styled.div`
    display: flex;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 38rem;
  `,

  Category: styled.div``,

  CategoriesLine: styled.div`
    width: 40rem;
    height: 0.1rem;
    background-color: #000000;
  `,

  WishDetails: styled.div`
    display: flex;
    padding: 1rem 0 0 1rem;
  `,

  WishNameBox: styled.div`
    width: 15rem;
  `,

  WishLinkBox: styled.div`
    width: 20rem;
  `,

  WishPriceBox: styled.div`
    width: 2rem;
    display: flex;
    justify-content: center;
  `
};
