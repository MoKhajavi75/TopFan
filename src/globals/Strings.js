const fa = {
  DIRECTION: 'rtl',
  header_text: 'یادآور',
  settings_locale: 'زبان برنامه',
  settings_theme: 'پوسته برنامه',
  yellow: 'زرد',
  coral: 'مرجانی',
  red: 'قرمز',
  confirm: 'تایید',
  inputPlaceHolder: 'عنوان...',
  deleteTitle: 'حذف',
  deleteMessage: 'مطمئنی؟',
  deleteYes: 'آره',
  deleteNo: 'نه بابا!',
  settings: 'تنظیمات'
};

const en = {
  DIRECTION: 'ltr',
  header_text: 'To Do',
  settings_locale: 'Language',
  settings_theme: 'Theme',
  yellow: 'Yellow',
  coral: 'Coral',
  red: 'Red',
  confirm: 'Confirm',
  inputPlaceHolder: 'title...',
  deleteTitle: 'Delete',
  deleteMessage: 'Are you sure?',
  deleteYes: 'Yep',
  deleteNo: 'Nope!',
  settings: 'Settings'
};

const strings = locale => {
  switch (locale) {
    case 'fa':
      return fa;

    case 'en':
      return en;

    default:
      return en;
  }
};

export { strings };
