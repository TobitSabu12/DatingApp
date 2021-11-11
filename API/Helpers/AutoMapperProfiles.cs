using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Extentions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    { //setuped mapper configiration that help automapper to select which one should select and obtai specila case properties ;like age
        public AutoMapperProfiles()
        {
            CreateMap<AppUser,MemberDto>()
            .ForMember(dest => dest.PhotoUrl,opt => opt.MapFrom(src =>
             src.Photos.FirstOrDefault(x => x.IsMain).Url)).ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Photo,PhotoDto>();
        }
    }
}