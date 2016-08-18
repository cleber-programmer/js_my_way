describe('main.js', () => {

  it('Rex esta definido', () => {
    expect(Rex).toBeDefined();
  });

  it('Consumindo um modulo nativo', () => {

    Rex(({ add }) =>
      expect(add).toBeDefined());
    
  });

  it('Definindo um novo modulo chamado me', () => {

    Rex('me', () =>
      () => 'cleber.programmer');
    
  });

  it('Verificando o modulo recem criado chamado me esta definido', () => {

    Rex(({ me }) =>
      expect(me()).toBeDefined());
    
  });

  it('Consumindo o modulo me, criado no teste anterior', () => {

    Rex(({ me }) =>
      expect(me()).toBe('cleber.programmer'));
    
  });

  it('Definindo um novo modulo chamado nickname, com dependencia do modulo add', () => {

    Rex('nickname', ({ add }) =>
      () => add('cleber.', 'programmer'));
    
  });

  it('Verificando o modulo recem criado chamado nickname que depende do modulo add esta definido', () => {

    Rex(({ nickname }) =>
      expect(nickname()).toBeDefined());
    
  });

  it('Consumindo o modulo nickname, criado no teste anterior', () => {

    Rex(({ nickname }) =>
      expect(nickname()).toBe('cleber.programmer'));
    
  });

  it('Definindo um novo modulo chamado hello, com dependencia do modulo add e recebe um argumento', () => {

    Rex('hello', ({ add }) =>
      (name) => add('Hello ', name));
    
  });

  it('Verificando o modulo recem criado chamado hello que depende do modulo add e que recebe um argumento esta definido', () => {

    Rex(({ hello }) =>
      expect(hello()).toBeDefined());
    
  });

  it('Consumindo o modulo hello, criado no teste anterior', () => {

    Rex(({ hello }) =>
      expect(hello('cleber.programmer')).toBe('Hello cleber.programmer'));
    
  });

});