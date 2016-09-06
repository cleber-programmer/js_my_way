describe('main.js', () => {

  it('Rex esta definido', () => {
    expect(Rex).toBeDefined();
  });

  it('Definindo um novo modulo chamado "add"', () => {

    Rex('add', () =>
      (a, b) => a + b);
    
  });

  it('Verificando o modulo recem criado chamado "add" esta definido', () => {

    Rex(({ add }) =>
      expect(add()).toBeDefined());
    
  });

  it('Consumindo o modulo "add", criado no teste anterior', () => {

    Rex(({ add }) =>
      expect(add(1, 2)).toBe(3));
    
  });

  it('Definindo um novo modulo chamado "nickname", com dependencia do modulo "add"', () => {

    Rex('nickname', ({ add }) =>
      () => add('cleber.', 'programmer'));
    
  });

  it('Verificando o modulo recem criado chamado "nickname" que depende do modulo "add" esta definido', () => {

    Rex(({ nickname }) =>
      expect(nickname()).toBeDefined());
    
  });

  it('Consumindo o modulo "nickname", criado no teste anterior', () => {

    Rex(({ nickname }) =>
      expect(nickname()).toBe('cleber.programmer'));
    
  });

  it('Definindo um novo modulo chamado "hello", com dependencia do modulo add e recebe um argumento', () => {

    Rex('hello', ({ add }) =>
      (name) => add('Hello ', name));
    
  });

  it('Verificando o modulo recem criado chamado "hello" que depende do modulo "add" e que recebe um argumento esta definido', () => {

    Rex(({ hello }) =>
      expect(hello()).toBeDefined());
    
  });

  it('Consumindo o modulo "hello", criado no teste anterior', () => {

    Rex(({ hello }) =>
      expect(hello('cleber.programmer')).toBe('Hello cleber.programmer'));
    
  });

  afterEach(window.onload);

});