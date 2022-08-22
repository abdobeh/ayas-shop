import React from 'react';

const LoginForm = ({
  onChangeHandler,
  buttonOnClickHandler,
  emailInputValue,
  passwordInputValue
}) => {
  const styleClasses = useLoginFormStyle();
  const titleTextClass = useFormTitleTextStyle();
  const buttonClass = useButtonStyle();

  return (
    <>
      <Title
        componentClassName={styleClasses.formTitle}
        textClassName={titleTextClass.formTitleText}
        title='Login'
        titleIcon={<LaunchIcon fontSize='large' style={{ color: '#E1EAE8' }} />}
      />
      <Grid container spacing={2} className={styleClasses.formGrid}>
        <Grid item xs={12}>
          <TextInput
            name='email'
            label='Email Address'
            type='email'
            className={styleClasses.emailBox}
            onChangeHandler={onChangeHandler}
            value={emailInputValue}
            // error={!!errorInput}
            // helperText={helperText && helperText}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInput
            name='password'
            label='Password'
            type='password'
            className={styleClasses.emailBox}
            onChangeHandler={onChangeHandler}
            value={passwordInputValue}
            // error={!!errorInput}
            // helperText={helperText && helperText}
          />
        </Grid>
        <Grid item xs={12}>
          <CheckBox
            label='Remember Me'
            checkboxClassName={styleClasses.checkBox}
            labelClassName={styleClasses.checkBoxLabel}
          />
        </Grid>
        <Grid item xs={12}>
          <BasicButton
            text='LOGIN'
            componentClassName={buttonClass.button}
            onClickHandler={buttonOnClickHandler}
          />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Copyright />
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
