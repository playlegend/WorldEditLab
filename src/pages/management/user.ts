import { Request, Response } from 'express';
import { Role, User } from '../../shared/models';
import { HTTPError, HTTPStatus } from '../../shared/helpers/errorHandler';
import { buildDefaultResponse } from '../../shared/response';

export const handleUserIndexView = async (req: Request, res: Response) => {
  const user = req.user as User;
  if (!user || user.role !== Role.ADMIN) {
    return HTTPError(res, HTTPStatus.FORBIDDEN, 'Forbidden');
  }

  const responseData = buildDefaultResponse(req);

  return res.render('management-user', responseData);
};
