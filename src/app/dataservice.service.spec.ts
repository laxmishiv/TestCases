import { TestBed } from '@angular/core/testing';
import{ HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataserviceService } from './dataservice.service';
import { USERS } from './MockUsers/USERS';

describe('DataserviceService', () => {
  let service: DataserviceService;
  let testingController : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
     imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(DataserviceService);
    testingController=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users',()=>{
    service.getAllUsers().subscribe((users:any)=>{
      expect(users).toBeTruthy();
      expect(users.length).toBe(3);
      const seconduser=users.find((user:any)=>user.id===2);
      expect(seconduser.name).toBe('Mik');

    });
    const mockreq=testingController.expectOne('api/users');
    expect(mockreq.request.method).toEqual('GET');
    mockreq.flush(Object.values(USERS));
  });
  it('should get user by id',()=>{
    service.getuserbyid(1).subscribe((user:any)=>{
      expect(user).toBeTruthy();
      expect(user.name).toBe('Lax');

    });
    const mockreq=testingController.expectOne('api/users/1');
    expect(mockreq.request.method).toEqual('GET');
    mockreq.flush(USERS[1]);
  });
  it('should update user by id',()=>{
    let changes={age:25};
    service.updateuser(1,changes).subscribe((user:any)=>{
      expect(user).toBeTruthy();
      expect(user.id).toBe(1);

    });
    const mockreq=testingController.expectOne('api/users/1');
    expect(mockreq.request.method).toEqual('PUT');
    let modifyuser=USERS[1];//original user
    modifyuser.age=25;//modified user
    expect(mockreq.request.body.age).toEqual(changes.age);
    mockreq.flush(modifyuser);
  });
  afterEach(()=>{
    testingController.verify();
  })
});
