const FORM_CONFIG = {
  LAYOUT: {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 24,
    },
  },
  TAIL_LAYOUT: {
    wrapperCol: {
      offset: 6,
      span: 24,
    },
  },
};

const VALIDATE_MSG = {
  required: "Необходимо заполнить поле",
};

const CREATE_TASK_CONFIG = {
  title: "Создать задание",
  btnName: "Создать",
};

const UPDATE_TASK_CONFIG = {
  title: "Задание",
  btnName: "Обновить",
};

export { FORM_CONFIG, VALIDATE_MSG, CREATE_TASK_CONFIG, UPDATE_TASK_CONFIG };
