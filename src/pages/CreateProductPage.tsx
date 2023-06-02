import React, { useState,useEffect,useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import RichTextEditor from '../components/RichTextEditor';
import SubmitButton from '../components/SubmitButton';
import axios from 'axios';
import ErrorMessage from '../components/ErrorMessage';
import ResetButton from '../components/ResetButton';
import { useMutation } from 'react-query';
import { postRequest, ApiResponse } from '../services/apiService'

import TitleField from '../components/TitleField';
import PriceField from '../components/PriceField';
import CategorySelect from '../components/CategorySelect';
import ImageField from '../components/ImageField';
import PopupMessage from "../components/PopupMessage";



type FormValues = {
  title: string;
  price: number;
  category: string;
  images: FileList;
  richTextContent: string;
  imagesBase64?: string[];
};

const CreateProductPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    
  } = useForm<FormValues>();

  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [richTextContent, setRichTextContent] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [showPopup, setShowPopup] = useState(false);
  const [key, setKey] = useState(""); 
  
  
  // const mutation = useMutation((newProduct: FormValues) =>
  //   axios.post('http://localhost:3000/products', newProduct)
  // );
  const mutation = useMutation(
    (newProduct: FormValues) => postRequest<ApiResponse<any>>("/products", newProduct),
    {
      onSuccess: () => {
        setSuccessMessage("Product saved successfully");
        setShowPopup(true);
        handleReset();
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );



  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    data.richTextContent = richTextContent;

    // Convert images to base64
    const imageFiles = Array.from(data.images);
    const imagePromises = imageFiles.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.result) {
            const base64Url = reader.result as string;
            resolve(base64Url);
          } else {
            reject(new Error("Failed to convert image to base64."));
          }
        };

        reader.onerror = () => {
          reject(new Error("Failed to read image file."));
        };

        reader.readAsDataURL(file);
      });
    }
    );

    try {
      const imageBase64Urls = await Promise.all(imagePromises);
      data.imagesBase64 = imageBase64Urls;

      console.log(data);
      mutation.mutateAsync(data);
      setSuccessMessage('Product saved successfully');
      setShowPopup(true);
      handleReset();
    } catch (error) {
      console.error(error);
    }
  };
  const resetKey = () => {
    setKey(Date.now().toString()); 
  };
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showPopup]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    const previewUrls: string[] = [];

    if (fileList) {
      const filesArray = Array.from(fileList);

      filesArray.forEach((file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
          if (e.target && e.target.result) {
            const base64Url = e.target.result as string;
            previewUrls.push(base64Url);
            setImagePreviewUrls(previewUrls); // Update the imagePreviewUrls state
          }
        };

        reader.readAsDataURL(file);
      });
    }
    reset({
      images: undefined,
    });
  };
  
  const handleReset = () => {
    reset(); 
    setImagePreviewUrls([]); 
    setRichTextContent(''); 
    resetKey(); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-6xl max-h-full">
      {/* {mutation.isSuccess && <SuccessMessage message={successMessage} />} */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <TitleField register={register} errors={errors} />
            {errors.title && <ErrorMessage message={errors.title.message} />}
          </div>
          <div className="mb-6">
            <PriceField register={register} errors={errors} />
            {errors.price && <ErrorMessage message={errors.price.message} />}
          </div>
          <div className="mb-6">
            <CategorySelect register={register} errors={errors} />
            {errors.category && <ErrorMessage message={errors.category.message} />}
          </div>
          <div className="mb-6">
            <ImageField
              register={register}
              errors={errors}
              onChange={handleImageChange}
              imagePreviewUrls={imagePreviewUrls}
            />
            {errors.images && <ErrorMessage message={errors.images.message} />}
          </div>
          <div className="mb-6">
            <label htmlFor="title" className="block text-xl font-medium text-gray-700">Description</label>
            <RichTextEditor
  onChange={(content) => {
    setRichTextContent(content);
  }}
  key={key}
  error={errors.richTextContent && errors.richTextContent.message}
/>
          </div>
          <div className="flex justify-between">
            <SubmitButton label="Submit" />
            <ResetButton onClick={handleReset} />
          </div>
        </form>
      </div>
      {showPopup && <PopupMessage message={successMessage} />}
    </div>
  );
};

export default CreateProductPage;