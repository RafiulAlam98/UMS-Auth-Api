import { Model, Types } from 'mongoose'

import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface'
import { IStudent } from '../student/student.interface'
import { IAdmin } from './../admin/admin.interface'

export type IUser = {
  id: string
  role: string
  password: string
  needsPasswordChange: true | false
  student?: Types.ObjectId | IStudent
  faculty?: Types.ObjectId | IAcademicFaculty
  admin?: Types.ObjectId | IAdmin
}

type IUserMethods = {
  isUserExists(id: string): Promise<boolean>
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>
}

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>
