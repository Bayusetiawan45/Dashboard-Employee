const generateUser = (totalUser) => {
    const maleNameList = [
      'Liam',
      'Noah',
      'Oliver',
      'Elijah',
      'James',
      'William',
      'Benjamin',
      'Lucas',
      'Henry',
      'Theodore',
    ];
    const femaleNameList = [
      'Olivia',
      'Emma',
      'Charlotte',
      'Amelia',
      'Ava',
      'Sophia',
      'Isabella',
      'Mia',
      'Evelyn',
      'Harper',
    ];
    const divisionList = [
      'Finance',
      'Accounting',
      'IT',
      'Shipping',
      'Human Resource',
    ];
    const randomBool = () => Math.random() < 0.5;
    const generateRandomName = (isMale, name = []) => {
      const index = Math.floor(Math.random() * 9.9);
      const chosenName = (isMale ? maleNameList : femaleNameList)[index];
      let newName;
      if (name.includes(chosenName)) newName = name;
      else newName = [...name, chosenName];
      if (newName.length === 3) return newName.join(' ');
      else return generateRandomName(isMale, newName);
    };
    const userList = new Array(totalUser).fill('').map(() => {
      const isMale = randomBool();
      const age = Math.ceil(Math.random() * 30);
      const name = generateRandomName(isMale);
      const division = divisionList[Math.floor(Math.random() * 4.9)];
      return {
        name,
        email: `${name.split(' ').join('.')}@gmail.com`,
        gender: isMale ? 'Male' : 'Female',
        age,
        status: randomBool() ? 'Married' : 'Single',
        division,
      };
    });
    return userList;
  };

  export default generateUser