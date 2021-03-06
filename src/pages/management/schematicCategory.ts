import { Request, Response } from 'express';
import {
  Role, Schematic, SchematicCategory, User,
} from '../../shared/models';
import { HTTPErrorResponse, HTTPStatus } from '../../shared/helpers/errorHandler';
import { buildDefaultResponse } from '../../shared/response';

export const handleSchematicCategoryIndexView = async (req: Request, res: Response) => {
  const user = req.user as User;
  if (!user || user.role !== Role.ADMIN) {
    throw new HTTPErrorResponse(HTTPStatus.FORBIDDEN, 'Forbidden', false);
  }
  const responseCategories = await SchematicCategory.findAll({ attributes: ['id', 'name'] });

  const responseData = buildDefaultResponse(req);

  responseData.data = {
    rows: JSON.stringify(responseCategories),
    type: 'schematic',
    title: 'Schematic Categories',
  };

  return res.render('management-category', responseData);
};

export const handleSchematicCategoryCreateRequest = async (req: Request, res: Response) => {
  const user = req.user as User;
  if (!user || user.role !== Role.ADMIN) {
    throw new HTTPErrorResponse(HTTPStatus.FORBIDDEN, 'Forbidden');
  }

  const { name } = req.body;

  if (name.length <= 3 || name.length > 32) {
    throw new HTTPErrorResponse(HTTPStatus.BAD_REQUEST, 'Invalid category name');
  }

  const category = SchematicCategory.build({
    name,
  });

  return category.save().then(() => {
    res.send({
      success: true,
      row: {
        id: category.id,
        name: category.name,
      },
    });
  });
};

export const handleSchematicCategoryDeleteRequest = async (req: Request, res: Response) => {
  const user = req.user as User;
  if (!user || user.role !== Role.ADMIN) {
    throw new HTTPErrorResponse(HTTPStatus.FORBIDDEN, 'Forbidden');
  }

  const id = parseInt(req.params.id, 10);

  if (!id) {
    throw new HTTPErrorResponse(HTTPStatus.BAD_REQUEST, 'Invalid id');
  }

  await Schematic.update({
    categoryId: null,
  }, {
    where: {
      categoryId: id,
    },
  });

  const count = await SchematicCategory.destroy({
    where: {
      id,
    },
  });

  if (count === 1) {
    return res.send({ success: true });
  }
  throw new HTTPErrorResponse(HTTPStatus.NOT_FOUND, 'Not Found');
};

export const handleSchematicCategoryPatchRequest = async (req: Request, res: Response) => {
  const user = req.user as User;
  if (!user) {
    throw new HTTPErrorResponse(HTTPStatus.FORBIDDEN, 'Forbidden');
  }

  const id = parseInt(req.params.id, 10);

  if (!id) {
    throw new HTTPErrorResponse(HTTPStatus.BAD_REQUEST, 'Invalid id');
  }

  if (req.body.name.length <= 3
    || req.body.name.length > 32) {
    throw new HTTPErrorResponse(HTTPStatus.BAD_REQUEST, 'Bad Request');
  }

  const [count] = await SchematicCategory.update({
    name: req.body.name,
  }, {
    where: {
      id,
    },
  });

  if (count === 1) {
    return res.send({ success: true });
  }
  throw new HTTPErrorResponse(HTTPStatus.NOT_FOUND, 'Not Found');
};
