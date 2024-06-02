import mongoose from "mongoose";

const connectRouteToDb =
  (handler: any) => async (request: any, context: any) => {
    if (mongoose.connections[0].readyState) {
      return handler(request, context);
    }

    await mongoose.connect(process.env.DB_URI);

    return handler(request, context);
  };

export default connectRouteToDb;
