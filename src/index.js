import React, { useState } from 'react';
import { useFormContext, formUtils } from '@kne/react-form-antd';
import { LoadingButton } from '@kne/button-group';
import get from 'lodash/get';

const CaptchaButton = ({ target, duration = 60, onClick, children, ...props }) => {
  const { formState } = useFormContext();
  const targetField = (formUtils.getField || formUtils.findField)(formState, target);
  const [time, setTime] = useState(0);
  const setCountdown = time => {
    setTime(time);
    const timer = setInterval(() => {
      setTime(time => {
        if (time - 1 === 0) {
          clearInterval(timer);
        }
        return time - 1;
      });
    }, 1000);
  };

  return (
    <LoadingButton
      {...props}
      disabled={(get(targetField, 'validate.status') !== 1 && get(targetField, 'validate.status') !== 'PASS') || time > 0}
      onClick={async () => {
        const res = onClick && (await onClick());
        res !== false && setCountdown(duration);
      }}
    >
      {time === 0 ? children : `${time}s后重试`}
    </LoadingButton>
  );
};

export default CaptchaButton;
