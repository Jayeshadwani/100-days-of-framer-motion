import CenterSlideModel from 'components/general/modals/CenterSlideModel/CenterSlideModel';
import style from './styles';

import { pushToPage } from 'util/corporateUtil';
import { getCookie } from 'util/Cookie';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ShareYourExperienceModal(props) {
  const { totalContributionInAmount, employerId, fromDate, toDate } = props || {};
  const [state, setState] = useState({
    playLikeAnimation: false,
  });

  const playLikeAnimation = () => {
    setState((prevState) => {
      return { ...prevState, playLikeAnimation: true };
    });
  };

  const onTapAnimations = {
    likeButton: {
      initial: {
        scale: 1,
        userSelect: 'none',
        pointerEvents: 'auto',
        fill: '#EBF6FF',
        stroke: '#1A2E62',
        strokeWidth: '2',
      },
      animate: {
        width: '34px',
        height: '34px',
        stroke: 'none',
        userSelect: 'none',
        pointerEvents: 'none',
      },
      transition: {
        ease: 'easeOut',
        duration: 1,
      },
    },
    dislikeInitial: {
      scale: 1,
      userSelect: 'none',
      pointerEvents: 'auto',
    },

    miniLikeButton1: {
      initial: {
        opacity: 0,
        position: 'absolute',
        top: '15px',
        right: '15px',
      },
      animate: {
        opacity: [1, 0.7, 0.5, 0.3, 0],
        position: 'absolute',
        top: '-17px',
        right: '-4px',
      },
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.2,
      },
    },
    miniLikeButton2: {
      initial: {
        opacity: 0,
        position: 'absolute',
        top: '9px',
        right: '8px',
      },
      animate: {
        opacity: [1, 0.7, 0.5, 0.3, 0],
        position: 'absolute',
        top: '-26px',
        right: '-12px',
      },
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.2,
      },
    },
    likeWrapperInitial: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: '#e2f1ff',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 5,
    },
    likeWrapperAnimation: {
      width: '100%',
      borderRadius: '36px',
      background: '#e2f1ff',
      position: 'relative',
      top: 0,
      left: 0,
      padding: 9,
      zIndex: 5,
    },
    likeWrapperTransition: {
      ease: 'easeOut',
      delay: 0.5,
      duration: 0.5,
    },
    dislikeWrapperInitial: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: '#e2f1ff',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 5,
    },
    dislikeWrapperAnimation: {
      width: '155px',
      borderRadius: '36px',
      background: '#e2f1ff',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 9,
      zIndex: 5,
    },
    dislikeWrapperTransition: {
      ease: 'easeOut',
      delay: 0.5,
      duration: 0.5,
    },
  };

  return (
    <>
      <style jsx>{style}</style>
      <CenterSlideModel closeModal={props?.closeModal} top="4%" left="35%" showCrossIcon={true}>
        <div className="modalWrapper">
          <div className="modalHeadingText">
            <div className="howsyourText">How's your</div>
            <div className="experienceText">experience so far?</div>
          </div>
          <div className="modalSubheadingText">
            We’d love to know!
            {/* {`Your June payroll was successful with a value of `} */}
            {/* <span className="rupeeIcon">₹</span> */}
            {/* <span className="amount"> {numberWithCommas(totalContributionInAmount)}</span> */}
          </div>
          {!state.playLikeAnimation ? (
            <>
              <div className="AppRatingWrapper">
                <span className="likeRatingWrapper" onClick={playLikeAnimation}>
                  <svg
                    style={{ color: '#dcdcdc' }}
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M26.8705 11.683C26.3601 10.9405 25.4552 10.5228 24.4111 10.5228L19.0049 10.5228C18.6569 10.5228 18.3089 10.3836 18.1001 10.1052C17.868 9.82678 17.7752 9.47875 17.8216 9.08431L18.4945 4.76869C18.7729 3.49256 17.9144 2.03082 16.6383 1.58998C15.4318 1.14914 14.0397 1.7524 13.4596 2.61088L8.09989 10.5925V9.59476C8.09989 7.64577 7.26461 6.85689 5.22281 6.85689L3.87708 6.85689C1.83528 6.88009 1 7.66897 1 9.61796L1 22.8664C1 24.8154 1.83528 25.6043 3.87708 25.6043H5.22281C7.1718 25.6043 7.98388 24.8386 8.05348 23.0753L12.1139 26.2076C12.6939 26.7644 13.9237 27.066 14.8053 27.066L19.933 27.066C21.6964 27.066 23.4598 25.7435 23.8774 24.1194L27.1257 14.2584C27.4738 13.3071 27.381 12.4022 26.8705 11.683Z"
                      fill="#EBF6FF"
                      stroke="#1A2E62"
                      stroke-width="2"
                    />
                  </svg>
                </span>
                <span className="dislikeRatingWrapper">
                  <svg
                    // style={{ color: '#dcdcdc' }}
                    // whileTap={onTapAnimations.animate}
                    // initial={onTapAnimations.dislikeInitial}
                    // transition={onTapAnimations.transition}
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.46275 16.3832C1.9732 17.1257 2.87808 17.5433 3.92218 17.5433L9.32831 17.5433C9.67634 17.5433 10.0244 17.6825 10.2332 17.961C10.4652 18.2394 10.558 18.5874 10.5116 18.9819L9.83876 23.2975C9.56033 24.5736 10.4188 26.0353 11.6949 26.4762C12.9015 26.917 14.2936 26.3138 14.8736 25.4553L20.2334 17.4737L20.2334 18.4714C20.2334 20.4204 21.0686 21.2093 23.1104 21.2093L24.4562 21.2093C26.498 21.1861 27.3333 20.3972 27.3333 18.4482L27.3333 5.19972C27.3332 3.25073 26.498 2.46186 24.4562 2.46186L23.1104 2.46186C21.1615 2.46186 20.3494 3.22753 20.2798 4.9909L16.2194 1.8586C15.6393 1.30175 14.4096 1.00011 13.5279 1.00011L8.40022 1.00011C6.63685 1.00011 4.87347 2.32265 4.45583 3.9468L1.20752 13.8078C0.859487 14.759 0.952298 15.6639 1.46275 16.3832Z"
                      stroke="#1A2E62"
                      stroke-width="2"
                    />
                  </svg>
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="animateAppRatingWrapper">
                {/* <span className="animateButtonsWrapper"> */}
                {/* <span className="animateLikeButtonWrapper"> */}
                <span
                  className="animatelikeRatingWrapper"
                  // initial={onTapAnimations.likeWrapperInitial}
                  // animate={onTapAnimations.likeWrapperAnimation}
                  // transition={onTapAnimations.likeWrapperTransition}
                >
                  <motion.svg
                    style={{ color: '#dcdcdc' }}
                    animate={onTapAnimations.likeButton.animate}
                    initial={onTapAnimations.likeButton.initial}
                    transition={onTapAnimations.likeButton.transition}
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M26.8705 11.683C26.3601 10.9405 25.4552 10.5228 24.4111 10.5228L19.0049 10.5228C18.6569 10.5228 18.3089 10.3836 18.1001 10.1052C17.868 9.82678 17.7752 9.47875 17.8216 9.08431L18.4945 4.76869C18.7729 3.49256 17.9144 2.03082 16.6383 1.58998C15.4318 1.14914 14.0397 1.7524 13.4596 2.61088L8.09989 10.5925V9.59476C8.09989 7.64577 7.26461 6.85689 5.22281 6.85689L3.87708 6.85689C1.83528 6.88009 1 7.66897 1 9.61796L1 22.8664C1 24.8154 1.83528 25.6043 3.87708 25.6043H5.22281C7.1718 25.6043 7.98388 24.8386 8.05348 23.0753L12.1139 26.2076C12.6939 26.7644 13.9237 27.066 14.8053 27.066L19.933 27.066C21.6964 27.066 23.4598 25.7435 23.8774 24.1194L27.1257 14.2584C27.4738 13.3071 27.381 12.4022 26.8705 11.683Z"
                      fill="#1e96fc"
                      stroke="none"
                    />
                  </motion.svg>
                  {/* Mini Like buttons */}
                  <motion.svg
                    // className="miniLikeButton1"
                    animate={onTapAnimations.miniLikeButton1.animate}
                    initial={onTapAnimations.miniLikeButton1.initial}
                    transition={onTapAnimations.miniLikeButton1.transition}
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.82427 3.8791C9.63043 3.59786 9.2868 3.43967 8.89031 3.43967H6.83734C6.70518 3.43967 6.57301 3.38694 6.49371 3.28148C6.4056 3.17601 6.37036 3.04419 6.38798 2.89478L6.6435 1.26012C6.74923 0.77675 6.42322 0.223073 5.93862 0.0560915C5.48045 -0.11089 4.95179 0.117612 4.73151 0.442787L2.69617 3.46604V3.08813C2.69617 2.34989 2.37897 2.05108 1.6036 2.05108H1.09256C0.317196 2.05987 0 2.35868 0 3.09692L0 8.11516C0 8.8534 0.317196 9.1522 1.09256 9.1522H1.6036C2.34373 9.1522 2.65211 8.86218 2.67855 8.19426L4.22047 9.38071C4.44075 9.59163 4.90773 9.70588 5.24255 9.70588H7.18978C7.85942 9.70588 8.52905 9.20494 8.68765 8.58974L9.92119 4.85462C10.0534 4.49429 10.0181 4.15154 9.82427 3.8791Z"
                      fill="#1E96FC"
                    />
                  </motion.svg>
                  <motion.svg
                    // className="miniLikeButton2"
                    animate={onTapAnimations.miniLikeButton2.animate}
                    initial={onTapAnimations.miniLikeButton2.initial}
                    transition={onTapAnimations.miniLikeButton2.transition}
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.82427 3.8791C9.63043 3.59786 9.2868 3.43967 8.89031 3.43967H6.83734C6.70518 3.43967 6.57301 3.38694 6.49371 3.28148C6.4056 3.17601 6.37036 3.04419 6.38798 2.89478L6.6435 1.26012C6.74923 0.77675 6.42322 0.223073 5.93862 0.0560915C5.48045 -0.11089 4.95179 0.117612 4.73151 0.442787L2.69617 3.46604V3.08813C2.69617 2.34989 2.37897 2.05108 1.6036 2.05108H1.09256C0.317196 2.05987 0 2.35868 0 3.09692L0 8.11516C0 8.8534 0.317196 9.1522 1.09256 9.1522H1.6036C2.34373 9.1522 2.65211 8.86218 2.67855 8.19426L4.22047 9.38071C4.44075 9.59163 4.90773 9.70588 5.24255 9.70588H7.18978C7.85942 9.70588 8.52905 9.20494 8.68765 8.58974L9.92119 4.85462C10.0534 4.49429 10.0181 4.15154 9.82427 3.8791Z"
                      fill="#1E96FC"
                    />
                  </motion.svg>
                </span>
                {/* </span> */}
                <span className="animateDislikeRatingWrapper">
                  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.46275 16.3832C1.9732 17.1257 2.87808 17.5433 3.92218 17.5433L9.32831 17.5433C9.67634 17.5433 10.0244 17.6825 10.2332 17.961C10.4652 18.2394 10.558 18.5874 10.5116 18.9819L9.83876 23.2975C9.56033 24.5736 10.4188 26.0353 11.6949 26.4762C12.9015 26.917 14.2936 26.3138 14.8736 25.4553L20.2334 17.4737L20.2334 18.4714C20.2334 20.4204 21.0686 21.2093 23.1104 21.2093L24.4562 21.2093C26.498 21.1861 27.3333 20.3972 27.3333 18.4482L27.3333 5.19972C27.3332 3.25073 26.498 2.46186 24.4562 2.46186L23.1104 2.46186C21.1615 2.46186 20.3494 3.22753 20.2798 4.9909L16.2194 1.8586C15.6393 1.30175 14.4096 1.00011 13.5279 1.00011L8.40022 1.00011C6.63685 1.00011 4.87347 2.32265 4.45583 3.9468L1.20752 13.8078C0.859487 14.759 0.952298 15.6639 1.46275 16.3832Z"
                      stroke="#1A2E62"
                      stroke-width="2"
                    />
                  </svg>
                </span>
                {/* </span> */}
              </div>
            </>
          )}
        </div>
      </CenterSlideModel>
    </>
  );
}

