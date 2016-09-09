describe('dispatcher.js', () => {

  it('Rex.on esta definido', () => {
    expect(Rex.on).toBeDefined();
  });

  it('Rex.off esta definido', () => {
    expect(Rex.off).toBeDefined();
  });

  it('Rex.trigger esta definido', () => {
    expect(Rex.trigger).toBeDefined();
  });

  it('Registrando um evento no canal "rex:click"', () => {

    function on() {
      Rex.on('rex:click', () => {}, this);
    }

    expect(on).not.toThrow();

  });

  it('Registrando e removendo um evento no canal "rex:click"', () => {

    function click() {

    }

    function off() {
      Rex.off('rex:click', click);
    }

    Rex.on('rex:click', click);
    expect(off).not.toThrow();

  });

  it('Removendo um evento que nao no canal "rex:dbclick" que nao foi registrado', () => {

    function off() {
      Rex.off('rex:dbclick', () => {});
    }

    expect(off).not.toThrow();

  });

  it('Registrando e disparando um evento no canal "rex:hover"', () => {

    Rex.on('rex:hover', (name) => {
      expect(name).toBe('cleber.programmer');
    });

    Rex.trigger('rex:hover', 'cleber.programmer');

  });

  it('Disparando um evento no canal "rex:move" que nao foi registrado', () => {

    function trigger() {
      Rex.trigger('rex:move', 'cleber.programmer');
    }

    expect(trigger).not.toThrow();

  });

});