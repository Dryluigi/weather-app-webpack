const controlStatus = (action) => {
  const hiddenClass = 'hide';
  const loadingElement = document.querySelector('.status .loading');
  const notFoundElement = document.querySelector('.status .not-found');
  const errorElement = document.querySelector('.status .error');
  const weatherSectionElement = document.querySelector('.weather-section');

  if (action === 'loading') {
    loadingElement.classList.remove(hiddenClass);
    notFoundElement.classList.add(hiddenClass);
    errorElement.classList.add(hiddenClass);
  } else if (action === 'not_found') {
    notFoundElement.classList.remove(hiddenClass);
    loadingElement.classList.add(hiddenClass);
    errorElement.classList.add(hiddenClass);
  } else if (action === 'found') {
    weatherSectionElement.classList.remove(hiddenClass);
    loadingElement.classList.add(hiddenClass);
    notFoundElement.classList.add(hiddenClass);
    errorElement.classList.add(hiddenClass);
  } else if (action === 'error') {
    errorElement.classList.remove(hiddenClass);
    loadingElement.classList.add(hiddenClass);
    notFoundElement.classList.add(hiddenClass);
  } else {
    weatherSectionElement.classList.add(hiddenClass);
    loadingElement.classList.add(hiddenClass);
    notFoundElement.classList.add(hiddenClass);
    errorElement.classList.add(hiddenClass);
  }
};

export default controlStatus;