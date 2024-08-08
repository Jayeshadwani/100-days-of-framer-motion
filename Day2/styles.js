import css from 'styled-jsx/css';
export default css`
  @import 'src/public/styles/variables';
  @import 'src/public/styles/mixins/mixins';

  .modalWrapper {
    width: 309.545px;
    height: 220.578px;
    border-radius: 15px;
    background: #fff;
    padding: 48px;
  }
  .modalHeadingIcon {
    @include flexWithCenter;
  }
  .modalHeadingText {
    @include font-montserrat(19px, $space-cadet, 700, normal);
  }
  .modalSubheadingText {
    margin-top: 9.91px;
    @include font-poppins(12px, #9098a3, 500, normal, 1, -0.248px);
    @include flexWithCenter;
  }
  .experienceText {
    @include flexWithCenter;
  }
  .amount {
    @include font-poppins(14px, $space-cadet, 700, normal, 0.96);
  }
  .rupeeIcon {
    @include font-rupee(14px, $space-cadet, 700, normal);
  }
  .modalCTAFlexbox {
    margin-top: 36px;
    @include flexWithStart(16px);
    width: 100%;
  }
  .viewPayrollDetailsFlexbox,
  .goToDashboardFlebox {
    width: 50%;
  }
  .howsyourText {
    @include flexWithCenter;
  }
  .AppRatingWrapper {
    margin-top: 16px;
    @include flexWithCenter(8px);
  }
  .likeRatingWrapper,
  .dislikeRatingWrapper {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    @include flexWithCenter;
  }
  .likeRatingWrapper {
    background: #e2f1ff;
    position: relative;
  }
  .chotu1 {
    position: absolute;
    top: -10px;
    right: 9px;
  }
  .chotu2 {
    position: absolute;
    top: -17px;
    right: -4px;
  }

  .dislikeRatingWrapper {
    background: #eeeff5;
  }
  .animateAppRatingWrapper {
    margin-top: 16px;
    @include flexWithCenter(8px);
    width: 100%;
  }
  .animatelikeRatingWrapper {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    @include flexWithCenter;
    background: #e2f1ff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }
  .animateDislikeRatingWrapper {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    @include flexWithCenter;
    background: #eeeff5;
    position: absolute;
    top: 0;
    right: -54px;
    z-index: 4;
  }
  .animateLikeButtonWrapper,
  .animateButtonsWrapper {
    position: relative;
  }
  
`;

