import { GradePipe } from './grade.pipe';



describe('GradePipe', () => {
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

  it('should assign A grade when mark greater than 89',() =>{
    const pipe=new GradePipe();
    let grade=pipe.transform(93);
    expect(grade).toBe("A");
  })
  it('should assign B grade when mark between  80 and 89',() =>{
    const pipe=new GradePipe();
    let grade=pipe.transform(84);
    expect(grade).toBe("B");
  })
  it('should assign C grade when mark between  70 and 79',() =>{
    const pipe=new GradePipe();
    let grade=pipe.transform(77);
    expect(grade).toBe("C");
  })
  it('should assign D grade when mark between  60 and 69',() =>{
    const pipe=new GradePipe();
    let grade=pipe.transform(64);
    expect(grade).toBe("D");
  })
  it('should assign E grade when mark between  35 and 59',() =>{
    const pipe=new GradePipe();
    let grade=pipe.transform(53);
    expect(grade).toBe("E");
  })

  it('should assign Fail grade when mark less than 35',() =>{
    const pipe=new GradePipe();
    let grade=pipe.transform(21);
    expect(grade).toBe("Fail");
  })

});
